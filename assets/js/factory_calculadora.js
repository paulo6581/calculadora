function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        get inicia() {
            this.clickbotoes;
            this.keyEnter;
        },

        get keyEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta;
                }
            });
        },

        get realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        get clearDisplay() {
            this.display.value = '';
        },

        get deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

         get clickbotoes() {
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnForDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay;
                }

                if (elemento.classList.contains('btn-del')) {
                    this.deleteOne;
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta;
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia;