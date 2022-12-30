import { MdOutlineBusiness } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";






import "./styles.css"

export const Home = () => {
    return (
        <div className="grid-cards">
            <div className="card">
                <div className="header-card">
                    <MdOutlineBusiness />
                    <div className="dotsInfo">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
                <div className="content-card">
                    <h3>Sempre Internet</h3>
                </div>
            </div>

            <div className="card">
                <div className="header-card">
                    <FaHandshake />
                    <div className="dotsInfo">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
                <div className="content-card">
                    <h2>10000</h2>
                    <small>Atendimentos contratados por mês</small>
                </div>
            </div>

            <div className="card">
                <div className="header-card">
                    <MdCloudUpload />
                    <div className="dotsInfo">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
                <div className="content-card">
                    <h2>10000</h2>
                    <small>Atendimentos usados esse mês</small>
                </div>
            </div>

            <div className="card">
                <div className="header-card">
                    <FaMoneyBillWave />
                    <div className="dotsInfo">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
                <div className="content-card">
                    <h2>R$800.000,00</h2>
                    <small>Total para pagamento mensalidade + excedente</small>
                </div>
            </div>

            <section>
                <div className="">
                    <div></div>
                    <div></div>
                </div>
                <div className="">
                    <div></div>
                </div>
            </section>


        </div>
    )
}
