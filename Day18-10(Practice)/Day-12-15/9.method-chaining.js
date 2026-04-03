const cal=(Val=0)=>{
    let value=Val;
    const obj={
        add:(num)=>{
            value+=num;
            return obj;
        },
        sub:(num)=>{
            value-=num;
            return obj;
        },
        mul:(num)=>{
            value*=num;
            return obj;
        },
        div:(num)=>{
            value/=num;
            return obj;
        },
        result:()=>{
            return value;
        }
    };
    return obj;
};

let res = cal(50).add(5).sub(5).mul(2).result();
console.log(res);