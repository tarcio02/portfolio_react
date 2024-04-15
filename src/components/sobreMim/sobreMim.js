import { ContainerSobreMim } from "./style"

function SobreMim(){
    return (
        <ContainerSobreMim>
            <div className="text">
                <h1> <span>Sobre</span>Mim</h1>
                <p>
                    Desde criança implementar alguma tecnologia 
                    em busca de solucionar um problema sempre foi
                    uma opção válida para mim, e por isso decidi que 
                    essa então seria a área que eu iria me dedicar 
                    profissionalmente. 
                </p>
                <p>
                    Hoje além de estar fazendo uma graduação eu estudo tecnologias 
                    voltadas ao front-end, como, por exemplo: React.js, TypeScript entre 
                    outras bibliotecas e pré-processadores que são utilizados 
                    no desenvolvimento de interfaces web. Além de ter conhecimento em
                    Git e GitHub para versionamento de código e metodologias ágeis
                    como o Scrum para controlar o trabalho de desenvolvimento.
                </p>
            </div>
            <div className="image">
                <img src="#" alt="jovem futurista"></img>
            </div>
        </ContainerSobreMim>
    )
}

export default SobreMim