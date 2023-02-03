// class PrintMachine {
//     constructor(fz, col, ff) {
//         this.fontSize = fz;
//         this.color = col;
//         this.fontFamily = ff;
//         this.align = 'center';
//         this.fontWeight = 600;
//     }
//     print(text) {
//         document.write(`<p style="font-size: ${this.fontSize};color: ${this.color};font-family: ${this.fontFamily};font-weight: ${this.fontWeight}">${text}</p>`)
//     }
// }
//
// const text1 = new PrintMachine("56px", 'blue', "Arial Narrow")
// text1.print('HELLO')

class News {
    constructor(ttl, txt, tg, dt) {
        this.title = ttl;
        this.text = txt;
        this.tags = tg;
        this.date = 'dddd' //this.date(dt)
    }
    
    print() {
        let text = document.querySelector('.content1')
        // соб
        let time = this.date;
        let time1 = time.getHours(time)
        //
        console.log(time1)
        let second = new Date();
        let second1 = second.
        text.innerHTML += `<h1>${this.title}</h1>` + `<span>${this.date}</span>` + `<p>${this.text}</p>` + `<p>${this.tags}</p>`
    }
    
}

const news = new News('Заголовок', 'he asdasda asd', 'tag', '10.01.2021')
news.print()
































