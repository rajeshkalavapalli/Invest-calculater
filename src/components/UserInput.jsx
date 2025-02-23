import { useState } from 'react';
import '../App.css'



function UserInput() {
    const [userInput, setuserInput] = useState({
        InitialInvestment: 1000,
        AnnualInvestment: 20000,
        ExpectedReturns: 3000,
        Duration: 10
    })



    return (
        <section>
            <div className="investment-container">
                <div>
                    <p>
                        <label htmlFor="">Initial investment</label>
                        <input type="number" required />
                    </p>
                    <p>
                        <label htmlFor="">Anual investment</label>
                        <input type="number" required />
                    </p>
                </div>
                <div>
                    <p>
                        <label htmlFor="">Expected returns</label>
                        <input type="number" required />
                    </p>
                    <p>
                        <label htmlFor="">Duration</label>
                        <input type="number" required />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default UserInput;