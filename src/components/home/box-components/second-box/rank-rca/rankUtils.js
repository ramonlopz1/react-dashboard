import utils from '../../../../graphics/util/utils.js'

const bestNumbers = (data) => {

    const totalRevenue = {}
    const totalPositivation = {}
    const totalMix = {}

    const dataEntries = Object.entries(data)

    dataEntries.forEach(rca => {
        const rankRevenue = createRank(rca, 'revenue')
        const rankPositivation = createRank(rca, 'positivation')
        const rankMix = createRank(rca, 'mix')

        totalRevenue[rankRevenue.name] = rankRevenue.rank
        totalPositivation[rankPositivation.name] = rankPositivation.rank
        totalMix[rankMix.name] = rankMix.rank
    })
    
    const rankRevenue = orderByDesc(totalRevenue)
    const rankPositivation = orderByDesc(totalPositivation)
    const rankMix = orderByDesc(totalMix)

    const winRevenue = getFirstPos(rankRevenue)
    const winPositivation = getFirstPos(rankPositivation)
    const winMix = getFirstPos(rankMix)

    const arrayWins = [winRevenue, winPositivation, winMix]

    return [rankRevenue, arrayWins]

}


const createRank = (rca, typeRank) => {
    const name = rca[0]
    const list = rca[1]?.[typeRank]
    const rank = utils.calcYearTotal(list, 2021)

    return {
        name,
        rank,
    }
}

const orderByDesc = (value) => {
    const sortable = Object.fromEntries(
        Object.entries(value).sort(([, a], [, b]) => b - a)
    );

    return sortable
}

const getFirstPos = (obj) => Object.keys(obj)[0]

const rankUtils = {
    bestNumbers
}

export default rankUtils