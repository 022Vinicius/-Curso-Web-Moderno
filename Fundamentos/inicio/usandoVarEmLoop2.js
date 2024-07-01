const funcs = []

for(var i = 0; i!= 9; i++ ){
    funcs.push(function(){
    console.log(i)
    })
}

funcs[2]()
funcs[8]()