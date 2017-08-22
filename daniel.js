console.log('hello' + Date())

lala=999

// z = x + y

/* 
parseFloat(x.value)
*/
x.defaultValue = 100
y.defaultValue = 200

z.value = parseFloat(x.value) + parseFloat(y.value)

x.size = y.size = 10


x.onkeyup=y.onkeyup=function(ev){
    //console.log('you pressed x :',this)
    z.textContent=parseFloat(x.value)+parseFloat(y.value)
}

cbio.get()