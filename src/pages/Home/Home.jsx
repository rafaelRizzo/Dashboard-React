import React, { useEffect, useState } from "react";

import { MdOutlineBusiness } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

import { Chart } from "react-google-charts";


export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];


export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: 'transparent',
};


import "./styles.css"

export const Home = () => {


    return (
        <>
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
            </div>
            <div>
                <div className="container-mid">
                    <div className="historico-empresa">
                        <div className="card">
                            <div className="header-card">
                                <h2>Mês atual</h2>
                            </div>
                            <div className="content-card">
                                <h1>10000</h1>
                                <div className="porcentagem minus">~ 33%</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header-card">
                                <h2>Mês anterior</h2>
                            </div>
                            <div className="content-card">
                                <h1>15000</h1>
                                <div className="porcentagem more">~ 33%</div>
                            </div>
                        </div>
                    </div>
                    <div className="grafico-diario">
                        <div className="card">
                            <Chart
                                className="bg-grafico"
                                chartType="LineChart"
                                height="290px"
                                data={data}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
