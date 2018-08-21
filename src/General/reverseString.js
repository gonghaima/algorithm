export const ReverseString = (rawData) =>{
    let temp=[];
    let data = rawData.split('');
    while(data.length>0){
        temp.push(data.pop());
    }
    let result = temp.join('');
    return result;
}