


export default function UserInput({ userInput, handleChange }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment ($)</label>
                    <input type="number" id="initialInvestment" required
                    value={userInput.initialInvestment}
                    onChange={(event) => handleChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment ($)</label>
                    <input type="number" id="annualInvestment" required
                    value={userInput.annualInvestment}
                    onChange={(event) => handleChange('annualInvestment', event.target.value)}
                    />
                </p>
                </div>
                <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return (%)</label>
                    <input type="number" id="expectedReturn" required
                    value={userInput.expectedReturn}
                    onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="investment-duration">Investment Duration (years)</label>
                    <input type="number" id="duration" required
                    value={userInput.duration}
                    onChange={(event) => handleChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}