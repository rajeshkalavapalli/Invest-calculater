export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    let investmentValue = initialInvestment;
    let results = [];

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        
        results.push({
            year: i + 1, 
            interest: interestEarnedInYear, 
            valueEndOfYear: investmentValue, 
            annualInvestment: annualInvestment, 
        });
    }

    return results;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
