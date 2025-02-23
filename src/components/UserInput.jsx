import '../App.css'


function UserInput ( props ) {
    return (
        <section>
            <div className="investment-container">
                <p>
                    <label htmlFor="">{props.purpose1}</label>
                    <input type="number" required />
                </p>
                <p>
                    <label htmlFor="">{props.purpose2}</label>
                    <input type="number" required />
                </p>
            </div>
        </section>
    )
}

export default UserInput;