let s = 0,
    m = 0,
    h = 0,
    f = 0,
    func = 0;

let hour = document.querySelector('.h'),
    minute = document.querySelector('.m'),
    second = document.querySelector('.m');


let myinterval;

document.querySelector('.start').addEventListener('click', () => {
    func = 1
    if (func == 1) {
        myinterval = setInterval(() => {

            document.querySelector('.f').textContent = f
            f++
            if (f == 99) {
                f = 0;
                s++;
            }

            document.querySelector('.s').textContent = s
            if (s == 59) {
                s = 0;
                m++;
                document.querySelector('.m').textContent = m;
            }

            if (m == 59) {
                m = 0;
                h++;
                document.querySelector('.h').textContent = h;
            }
            func = 0;
        }, 10);
    }

})


document.querySelector('.stop').addEventListener('click', () => {

    clearInterval(myinterval);

})

