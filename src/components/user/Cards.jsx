import React, { useState } from 'react'
import { useAtom } from 'jotai'


import Layout from './Layout'
import Cardmaker from '../cardmaker/Cardmaker'
import carddatas from '../Data/user/carddatas'
import Modal from '../common/Modal/Modal'

function Card() {

    const [cvc, setcvc] = useState('231')
    const [expiry, setexpiry] = useState('12/22')
    const [focus, setfocus] = useState('number')
    const [name, setname] = useState('emma emeka')
    const [number, setnumber] = useState('5110 1212 2323 3454')

    const [cards, setacards] = useAtom(carddatas)

    const amount = 685234

    const Mailcash = () => (
        <form action="" className="form-group">
            <label htmlFor="">Address</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i className="fa fa-home"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="address" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <label htmlFor="">Zip  Code</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i className="fa fa-home"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Zip code" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <label htmlFor="">Amount</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                </div>
            </div>
            <label htmlFor="">Pin</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" class="form-control" placeholder="pin" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button type="submit" className="btn btn-primary mt-2 float-right"><i className="fa fa-paper-plane"></i> Mail</button>
        </form>
    )

    const modalid = "mailcash"

    return (
        <div>
            <Layout>
                <div className="row mb-5">
                    <div className="col-md-7 mb-3">
                        <div className="container shadow rounded p-3">
                            <div className="row">
                                <div className="col-md-8">
                                    <h6 className="text-muted" style={{ color: '#cacaca', fontSize: '12px' }}>Main Account</h6>
                                    <div className="">
                                        <h5 className="text-light mt-3 mb-0">Emeka Emmanuel</h5>
                                        <small className="text-muted">0123456789</small>
                                    </div>
                                    <button className="btn bg-blue mt-4" data-toggle="modal" data-target={`#${modalid}`}><i className="fa fa-paper-plane mr-1"></i> Cash Mailing</button>
                                </div>
                                <div className="col-md-1 mb-5"></div>
                                <div className="col-md-3">
                                    <h6 className="text-muted" style={{ color: '#cacaca', fontSize: '12px' }}>Available Fund</h6>
                                    <h3 className="mt-3 text-blue"> {amount.toLocaleString()}</h3>
                                    <button className="btn bg-blue mt-4"><i className="fa fa-credit-card mr-1"></i> Order Card</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal title="Cash Mailing" id={modalid} Data={Mailcash} />
                    <div className="col-md-1"></div>
                    <div className="col-md-4 pl-0 mb-3">
                        <Cardmaker cvc={cvc} expiry={expiry} focus={focus} name={name} number={number} />
                    </div>
                </div>
                <div className="row">
                    {cards.map((card, i) => (
                        <div className="col-md-4 pl-0 mb-3" key={i}>
                            <Cardmaker cvc={card.cvv} expiry={card.expires} focus={focus} name={name} number={card.numbers} />
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default Card
