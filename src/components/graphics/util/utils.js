// formata números para renderização
const formatNumbers = (number) => {
    const formattedNumber =
        parseFloat(number)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    return formattedNumber;
}

const getUpdateList = (list, year) => {
    if (!list) return
    // objectJSON[0] contém o array de anos 

    let objectWithYears = ""

    // se vier array de anos, senão, se vier objeto de anos
    if (list[0]) {
        objectWithYears = list[0];
    } else {
        objectWithYears = list
    }

    if (!objectWithYears?.[year.toString()]) return

    const arrayValues = Object.values(objectWithYears[year.toString()]);

    return arrayValues;
}


// calcula o faturamento total anual
const calcYearTotal = (list, year) => {
    if (!list) return

    // array com faturamento mensal, que servirá de base para comparar os valores
    // e obter as taxas percentuais de crescimento, mês a mês.
    const MonthlyAverage = utils.getUpdateList(list, year)

    // variáveis temporária do faturamento total anual
    let totalRevenue = 0 //

    if (MonthlyAverage) {
        MonthlyAverage.forEach(avarege => {
            totalRevenue += +avarege
        })

        return totalRevenue;
    }
}

// calcula a taxa de crescimento total anual
const calcYearGrowthly = (list, year, getArr) => {
    if (!list) return

    let monthlyGrowthlyAverage = 0
    let totalTaxAvarege = 0

    const MonthlyAverage = utils.getUpdateList(list, year)
    let monthlyGrowthlyArray = []
    MonthlyAverage.reduce((prev, curr, index) => {
        // calcula a taxa de crescimento entre o mês anterior e o atual
        monthlyGrowthlyAverage = ((curr / prev) * 100) - 100

        // cria Array com todas as taxas de crescimento mensais
        monthlyGrowthlyArray.push(monthlyGrowthlyAverage)


        // retorna o valor atual do Array, para o reduce
        const lastValueOperated = MonthlyAverage[index]

        return lastValueOperated
    })


    if (getArr) {
        monthlyGrowthlyArray.unshift(100)
        return monthlyGrowthlyArray
    }

    // soma todos os valores do Array de taxas de crescimento mensais
    monthlyGrowthlyArray.forEach(avarege => {
        totalTaxAvarege += avarege;
    })

    return totalTaxAvarege;
}

// calcula o melhor mês
const calcGreaterMonthly = (list, year) => {
    const MonthlyAverage = utils.getUpdateList(list, year)

    if (!MonthlyAverage) return

    const greater = MonthlyAverage.reduce((prev, curr) => {
        return prev > curr ? prev : curr
    })

    return greater;
}

// calcula o pior mês
const calcWorstMonthly = (list, year) => {
    const MonthlyAverage = utils.getUpdateList(list, year)

    if (!MonthlyAverage) return

    const worst = MonthlyAverage.reduce((prev, curr) => {
        return prev < curr ? prev : curr
    })

    return worst;
}

const utils = {
    formatNumbers,
    getUpdateList,
    calcYearTotal,
    calcYearGrowthly,
    calcGreaterMonthly,
    calcWorstMonthly
}

export default utils
