import axios from "axios"

import React, { useEffect, useState } from "react"

import { MdOutlineBusiness } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { FaHandshake } from "react-icons/fa"
import { MdCloudUpload } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { Chart } from "react-google-charts"

export const data = [
    ["Mês", "Ligações"],
    ["Jan", 500],
    ["Fev", 1000],
    ["Mar", 2000],
    ["Abr", 4000],
    ["Mai", 6000],
    ["Jun", 8000],
    ["Jul", 4000],
    ["Ago", 1000],
    ["Set", 4000],
    ["Out", 7000],
    ["Nov", 5000],
    ["Dez", 10000],
]

export const options = {
    title: "Ligações por ano",
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: 'transparent',
}

import "./styles.css"

export const Home = () => {

    const [datas, setDatas] = useState([])
    const [users, setUsers] = useState([])

    const getDatas = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")

            const datas = response.data
            console.log(datas)
            setDatas(datas)
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

            const users = response.data
            console.log(users)
            setUsers(users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDatas()
        getUsers()
    }, [])

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
                        <h3> ABC TELECOM </h3>
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
                        <h2> 10000 </h2>
                        <small> Atendimentos contratados por mês </small>
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
                        <h2> 10000 </h2>
                        <small> Atendimentos usados esse mês </small>
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
                        <h2> R$123.456,00 </h2>
                        <small> Total para pagamento mensalidade + excedente </small>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-mid">
                    <div className="historico-empresa">
                        <div className="card">
                            <div className="header-card">
                                <h2> Mês atual </h2>
                            </div>
                            <div className="content-card">
                                <h1>{datas.length === 0 ? 'Carregando' : datas.length}</h1>
                                <div className="porcentagem minus"> ?% </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header-card">
                                <h2> Mês anterior </h2>
                            </div>
                            <div className="content-card">
                                <h1> {users.length === 0 ? 'Carregando' : users.length} </h1>
                                <div className="porcentagem more"> ?% </div>
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

                <div className="container-bot">
                    <div className="card">
                        <h2> Últimos atendimentos </h2>
                        <div className="container-ultimos-atendimentos">
                            <div className="d-flex row-title-table">
                                <div className="p-row"> Empresa </div>
                                <div className="p-row"> Contato </div>
                                <div className="p-row"> Atendente </div>
                                <div className="p-row"> Data </div>
                            </div>
                            {datas.length === 0 ? 'Carregando' : (
                                datas.map((e, index) => (
                                    <div className="d-flex row-table" key={index}>
                                        <div className="p-row"> ABC TELECOM </div>
                                        <div className="p-row"> {e.name} </div>
                                        <div className="p-row"> {e.phone} </div>
                                        <div className="p-row"> 30/12/22 12:34</div>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
