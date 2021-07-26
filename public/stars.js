const fullStar = '<i class="fas fa-star"></i>'
const halfStar = '<i class="fas fa-star-half"></i>'

const printStars = num => {
    let number = Number(num)
    let html = ''
    while(number > 0) {
        if (number >= 1) {
            html += fullStar
            number--
        } else if (number === 0.5) {
            html += halfStar
            number--
        }
    }
    return html
}

module.exports = printStars
