import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';


export default function ResultsTable({ input }) {

    const results = calculateInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map(result => (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.valueEndOfYear - input.initialInvestment - result.annualInvestment * result.year)}</td>
                        <td>{formatter.format(input.initialInvestment + result.annualInvestment * result.year)}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}