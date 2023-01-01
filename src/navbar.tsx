import logo from './speedtype.png'
import {MdOutlineLightMode} from 'react-icons/md'
import {BsMoonStars} from 'react-icons/bs'
const Navba=({setLight}:any)=>{
    const dark=()=>{
        setLight(false)
        let dark=document.querySelector<HTMLElement>('.App')!;
        let text=document.querySelector<HTMLElement>('.randomtext')!;
        let inpt=document.querySelector<HTMLElement>('.inpt')!;
        dark.style.backgroundColor='rgb(51, 51, 51)';
        text.style.color='rgb(170, 170, 170)';
        inpt.style.color='rgb(240, 240, 240)';



    }

    const light=()=>{
        setLight(true)
        let light=document.querySelector<HTMLElement>('.App')!;
        let text=document.querySelector<HTMLElement>('.randomtext')!;
        let inpt=document.querySelector<HTMLElement>('.inpt')!;

        light.style.backgroundColor='rgb(190,200,215)';
        text.style.color='rgb(50, 50, 50)';
        inpt.style.color='rgb(51, 51, 51)';
        
    }
    return(<div className="navbar">
        <div className="logo"><img src={logo} width="200px"/></div>
        <div className="tema"><button onClick={()=>dark()}><BsMoonStars></BsMoonStars></button><button onClick={()=>light()}><MdOutlineLightMode></MdOutlineLightMode></button></div>
    </div>);
}; export default Navba