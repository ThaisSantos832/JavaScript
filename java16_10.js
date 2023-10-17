/*let nome="Carlos";
//alert("Nome:"+nome+"texto no final");
alert(`Nome: ${nome} texto no final 2`);
let teste=confirm("Escolha uma das opções");
if(teste){
    alert("Verdadeiro");
}else{
    alert("Falso");
}
let nome2=prompt("Digite seu apelido");
alert(`Seja bem vindo ${nome2}`);*/

let botao1=document.querySelector('#btn1');
botao1.addEventListener('click',()=>{
    let nome=document.querySelector('#nome');
    let texto_nome=nome.value;
    /*alert(`o nome é ${texto_nome}`);
    let num1=document.querySelector(`#num1`);
    let texto_num1=num1.value;
    alert(`o 1° número é ${texto_num1}`);
    let num2=document.querySelector(`#num2`);
    let texto_num2=num2.value;
    alert(`o 2° número é ${texto_num2}`);
    })*/
    let num1=document.querySelector(`#num1`);
    let num2=document.querySelector(`#num2`);
    let valor1=num1.value;
    let valor2=num2.value;
    let p=document.querySelector(".p1");
    p.textContent=`o nome é ${texto_nome} o 1° número é ${valor1} e o 2° número é ${valor2}`;
    })
    





