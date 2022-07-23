import './BoxLeft.css'
import BarsLoading from './box-points/BarsLoading'
import GreatWorst from './box-greatworst/GreatWorst'
import MiniCards from './box-minicards/MiniCards'
import utils from '../../../../graphics/util/utils'

export default function BoxLeft(props) {

    const customerDatas = props.customer.datas


    const getPoints = async (type) => {
        const list = customerDatas?.[type]
        const updatedList = await utils.getUpdateList(list, 2021)
        
        let tot
        const sumAll = updatedList.reduce((last, current) => {
            last+= current
            return last
        })

        console.log(sumAll)
        
    }

    getPoints('mix')

    return (
        <div className="box left">
                            <div className="box__infos">
                                <div className="rank">
                                    <div className="circle">
                                        38
                                    </div>
                                    <span>Rank</span>
                                </div>
                                <div className="data__resume">
                                    <h2>Pontuação</h2>
                                    <div className="points">
                                        <BarsLoading label="Pedidos" icon="cubes" />

                                        <BarsLoading label="Mix" icon="cart-arrow-down" />
                                        <BarsLoading label="Mix" icon="home" />
                                        <BarsLoading label="Mix" icon="home" />
                                        <BarsLoading label="Mix" icon="home" />
                                        <BarsLoading label="Mix" icon="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="box__infos">

                                <GreatWorst title="compra" value="R$ 9.893,23" />

                                <GreatWorst title="mix" value="8933" />

                            </div>
                            <div className="box__infos">
                                <MiniCards title="Teste" value={32323} />
                                <MiniCards title="Teste" value={32323} />
                                <MiniCards title="Teste" value={32323} />
                                <MiniCards title="Teste" value={32323} />
                            </div>
                        </div>
    )
}