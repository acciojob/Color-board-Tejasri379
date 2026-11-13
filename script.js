//your JS code here. If required.
const container=document.querySelector(".container")
        const fragment=document.createDocumentFragment()
        for(let i=0;i<800;i++){
            const div=document.createElement("div")
            div.classList.add("square")
            div.addEventListener('mouseover',()=>{
                const red = Math.floor(Math.random() * 256)
                const green = Math.floor(Math.random() * 256)
                const blue = Math.floor(Math.random() * 256)

                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            })

            div.addEventListener('mouseout',()=>{
                div.style.backgroundColor="gray"
                div.style.transition="background 0.5s"
            },5000)
            fragment.appendChild(div)
        }

        container.append(fragment)
        console.log(fragment)