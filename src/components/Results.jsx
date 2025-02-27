import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = input.initialInvestment;

    return (
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Capital Investment</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map((yearData) => {
                        const totalInterest = yearData.valueEndOfYear - (initialInvestment + input.annualInvestment * yearData.year);
                        const capitalInvestment = initialInvestment + (input.annualInvestment * yearData.year);

                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(capitalInvestment)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );


}
