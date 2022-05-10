const pointsBelong = (x1,y1,x2,y2,x3,y3,xp,yp,xq,yq) => {
    const AB = Math.abs(Math.sqrt((x2-x1)**2 + (y2-y1)**2))
    const BC = Math.abs(Math.sqrt((x3-x2)**2 + (y3-y2)**2))
    const AC = Math.abs(Math.sqrt((x1-x3)**2 + (y1-y3)**2))

    const arrayOfTriangle = (x1,y1,x2,y2,x3,y3) => Math.abs((x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2))/2.0);

    const belongsToArray = (x1,y1,x2,y2,x3,y3,x,y) => {
         let originalArray = arrayOfTriangle(x1,y1,x2,y2,x3,y3);
         let checkArrayOne = arrayOfTriangle(x,y,x2,y2,x3,y3);
         let checkArrayTwo = arrayOfTriangle(x1,y1,x,y,x3,y3);
         let checkArrayThree = arrayOfTriangle(x1,y1,x2,y2,x,y);
         return (originalArray == (checkArrayOne + checkArrayTwo + checkArrayThree));
    }

    let doesPBelong = belongsToArray(x1,y1,x2,y2,x3,y3,xp,yp);
    let doesQBelong = belongsToArray(x1,y1,x2,y2,x3,y3,xq,yq)

    if(!((AB+BC) > AC && (BC+AC) > AB && (AB+AC) > BC)){
        return 0
    }else if(doesPBelong && !doesQBelong){
        return 1
    }else if(!doesPBelong && doesQBelong){
        return 2
    }else if(doesPBelong && doesQBelong){
        return 3
    }else if( !doesPBelong && !doesQBelong){
        return 4
    }

}