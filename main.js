class door extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
            <div id="loading-door">
                <div id="left-door">
                    <div id="left-bar"></div>
                    <div id="left-bottom"></div>
                </div>
                <div id="right-door">
                    <div id="right-bar"></div>
                    <div id="right-bottom"></div>
                </div>
            </div>
            <style>
                #loading-door{
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                }
                #left-door{
                    width: 50vw;
                    height: 100vh;
                    background-color: rgba(252,250,242,.92);
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    animation: left 3s forwards;
                }
                #right-door{
                    width: 50vw;
                    height: 100vh;
                    background-color: rgba(252,250,242,.92);
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    animation: right 3s forwards;
                }
                #left-bar{
                    height: 100vh;
                    background: 
                    linear-gradient(to right,#ebb471 1vw,transparent 1.3vw),
                    linear-gradient(to bottom,#ebb471 1vw,transparent 1.3vw);
                    background-repeat: repeat;/* 默认为 repeat */
                    background-size: 3.5vw 7vw;
                }
                #right-bar{
                    height: 100vh;
                    background: 
                    linear-gradient(to right,#ebb471 1vw,transparent 1.3vw),
                    linear-gradient(to bottom,#ebb471 1vw,transparent 1.3vw);
                    background-repeat: repeat;/* 默认为 repeat */
                    background-size: 3.5vw 7vw;
                }
                #left-bottom{
                    position: absolute;
                    width: 50vw;
                    height: 14vw;
                    bottom: 0px;
                    background-color: #ebb471;
                }
                #right-bottom{
                    position: absolute;
                    width: 50vw;
                    height: 14vw;
                    bottom: 0px;
                    background-color: #ebb471;
                }

                @keyframes left {
                    0%{
                        transform: translateX(0px);
                    }
                    10%{
                        transform: translateX(0px);
                        box-shadow: 10px 0px 0px rgba(147,150,80,.5);
                    }
                    30%{
                        transform: translateX(-3vw);
                        box-shadow: 10px 0px 0px rgba(147,150,80,.4);
                        
                    }
                    35%{
                        transform: translateX(-3vw);

                    }
                    100%{
                        transform: translateX(-50vw);
                        box-shadow: 10px 0px 0px rgba(147,150,80,0);
                    }
                }
                @keyframes right {
                    0%{
                        transform: translateX(0px);
                    }
                    10%{
                        transform: translateX(0px);
                    }
                    30%{
                        transform: translateX(3vw);
                    }
                    35%{
                        transform: translateX(3vw);
                    }
                    100%{
                        transform: translateX(50vw);
                    }
                }
            </style>
        `
    }
}

customElements.define('loading-door',door)