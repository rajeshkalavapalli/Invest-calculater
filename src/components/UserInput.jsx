import '../App.css';

function UserInput({ onChange, userInput }) {
    return (
        <section>
            <div className="investment-container">
                <div>
                    <p>
                        <label htmlFor="initialInvestment">Initial Investment</label>
                        <input 
                            type="number"
                            value={userInput.initialInvestment} 
                            required  
                            onChange={(event) => onChange('initialInvestment', event.target.value)} 
                        />
                    </p>
                    <p>
                        <label htmlFor="annualInvestment">Annual Investment</label>
                        <input 
                            type="number"
                            value={userInput.annualInvestment} 
                            required  
                            onChange={(event) => onChange('annualInvestment', event.target.value)} 
                        />
                    </p>
                </div>
                <div>
                    <p>
                        <label htmlFor="expectedReturn">Expected Return (%)</label>
                        <input 
                            type="number"
                            value={userInput.expectedReturn} 
                            required  
                            onChange={(event) => onChange('expectedReturn', event.target.value)} 
                        />
                    </p>
                    <p>
                        <label htmlFor="duration">Duration (Years)</label>
                        <input 
                            type="number"
                            value={userInput.duration} 
                            required  
                            onChange={(event) => onChange('duration', event.target.value)} 
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default UserInput;
