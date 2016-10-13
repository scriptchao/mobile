//变量声明
try{
    let a = 1;
    function b(){
        let a = 3;
        console.log(a);
    }
    b();
    console.log(a);
}catch(e){
    console.log(e);
}
//同一作用域中不能重复声明同名变量
//常量声明
//常量名规范为全字大写
//常量是不可改的，修改会导致报错  （可以是不同作用域）你懂的
//同一作用域中不能声明同名常量 注意 是同一作用域！！！！！！！！
const NAME = 666;
console.log(NAME);

//解构赋值
let obj = {
    name : '名字',
    sex : '中'
};
console.log(obj);
let {
    name,
    sex,
    height  //如果对象没有此属性，值为undefined
    } = obj;
console.log(name,sex);
const OBJ1 = {
    NAME1 : '名字',
    SEX : '中'
    };
let {
    NAME1,
    SEX
    } = OBJ1;
//方法声明
const func = name => {
    console.log(name)
};
func('名字');

const func1 = (name,sex,weight = 200) => {
    console.log(name,sex,weight)
};
func1('名字','性别',300);

//返回值
const add = (a,b) => a + b;
console.log(add(5,6));

let fun1 = () =>{
    /*console.log(TT);*/
};
fun1();
const TT = 'MAIN';
console.log(TT);

//对象声明
let object = {
    name : '名字',
    sex,//如果属性没有赋值，则此属性值会查找上下文获取同名变常量的值
    /*school,上文没有则会报错*/
    speak(){
        console.log(this.name)
    }
};
console.log(object);
object.speak();

//类声明  中间不加逗号
class People{
    constructor(option){
        console.log(this);
        this.name = option.name;
        this.run = () => {
            console.log(this);
            console.log('i can run');
            return this;
        }
    }
    drink(){
        console.log('i can drink');
        return this;
    }
    walk(){
        console.log('i can walk');
        return this;
    }
}
/*let jack = new People({
    name : 'jack',
    run(){
        console.log('i can run');
        return this;
    }
});*/
let jack = new People({
    name : 'jack',
    run: () => {
        console.log(this);
        console.log('i can run');
        return this;
    }
});
jack.run();

//字符串新方法
//模板字符串
let person1 = 'Tom';
    person2 = 'jerry';
console.log(`${person1}${person2}`);
let arrPerson = ['tom','jerry','jack','tim'];
console.log(`${arrPerson.join('and')} are play happily`);
let arrFamily = [
    {
        father : 'tom',
        pet : ['cat','dog']
    },
    {
        father : 'jerry',
        pet : ['snake','bird']
    },
    {
        father : 'jack',
        mother : 'merry',
        pet : ['pig', 'duck']
    }
];
console.log(`${arrFamily.map(item => `${item.father}${item.mother ? `and his wife ${item.mother}` : ''} and his pets ${item.pet.join(' and ')}`).join(' and ')} are play happily`);
//字符串新方法
//startsWith判断字符串是否以某字符串片段开始
console.log(person1.startsWith('To'));
//endsWith判断字符串是否以某字符串片段结束
console.log(person1.endsWith('om'));
//includes判断字符串中是否包含某字符串片段
console.log(person2.includes('rr')); //返回true或false
//重复字符串
console.log(person1.repeat(4));

//promise 吊吊哒
//resolve和reject参数由promise对象自动传入，数据类型都是方法
//当需求任务为处理成功时，需要手动调用resolve,被then方法参数得到
//当需求任务处理失败时，需要手动调用reject，被catch方法参数得到
new Promise((resolve,reject) =>{
    console.log(resolve,reject);
    setTimeout(()=>{
        if(Math.random() > .5){
            resolve(666);
        }else{
            reject(233);
        }
    },500);
}).then(number=>{
    console.log(number);
    return new Promise((resolve,reject) =>{
        console.log(resolve,reject);
        setTimeout(()=>{
            if(Math.random() > .5){
                resolve(666);
            }else{
                reject(233);
            }
        },500);
    })
}).then(()=>{
    console.log(66666);
}).catch(number=>{
    console.log(number);
});

//fetch获取数据，未来版的ajax
//使用get请求获取数据
//如果想要json格式化
//由于被json方法和text方法处理的返回值为promise对象的实例
//所以需要通过下一次then获取到处理的结果 !!!!!!
//get请求
fetch('http://www.ikindness.cn/api/test/get').then(res => res.json()).then(str => console.log(str.data));
//使用post请求通过表单提交数据
fetch('http://www.ikindness.cn/api/test/post',{
    method :'post',
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    body : 'a=1&b=2'
}).then(res => res.json()).then(str => console.log(str));
