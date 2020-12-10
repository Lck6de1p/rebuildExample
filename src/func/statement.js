
import createStatementData from './createStatementData'


export const statement = function(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays))
}

function renderPlainText(data) {
    let result = `Statement for ${data.customer} \n`
    for (let perf of data.performances) {
        result += `${perf.play.name}: ${usd(perf.amount)} ${perf.audience} seats \n`
    }
    result += `Amount owed is ${usd(data.totalAmount)} \n`
    result += `You earned ${data.totalVolumeCredits} creadits \n`
    return result
}

export const htmlStatement = function(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data) {
    let result = `<h1>Statement for ${data.customer}<h1>\n`
    result += "<table>\n"
    result +="<tr><th>play</th><th>seats</th><th>cost</th></tr>\n"
    for (let perf of data.performances) {
        result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>\n`
        result += `<td>${usd(perf.amount)}</td></tr>\n`
    }
    result += "</table>\n"
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`
    result += `<p>You earned <em>${usd(data.totalVolumeCredits)}</em></p>\n`
    return result
}
function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD",
        minimumFractionDigits: 2
    }).format(aNumber/100)
}


