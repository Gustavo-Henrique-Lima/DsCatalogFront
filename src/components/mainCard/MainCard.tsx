import Image from "next/image";
import car from "../../assets/main-car.svg";

function MainCard() {
    return (
        <>
            <div className="xsm:p-3 p-8 ">
                <div className="bg-blue-base mx-auto rounded-xl flex flex-col items-center justify-center xl:flex-row-reverse xl:justify-around xxl:flex-row-reverse xxl:justify-around xsm:w-three-hundred xsm:h-three-hundred-sixty-five sm:w-five-hundred-thirty-six sm:h-three-hundred-sixty-five md:w-seven-hundred-twenty-eight md:h-four-hundred-seventy-five lg:w-nine-hundred-fifty-two lg:h-five-hundred-seventy-nine w-nine-hundred-seventy-nine h-three-hundred-sixty-five">
                    <div>
                        <Image src={car} alt="Imagem de carro amarelo" />
                    </div>
                    <div className="text-white text-center mt-9 xl:text-left xxl:text-left">
                        <h1 className="text-2xl font-bold">O carro perfeito para você</h1>
                        <div className="max-w-two-hundred-fifty-one md:max-w-four-hundred-twenty">
                            <p className="xsm:text-sm sm:text-lg font-normal mt-3 max-h-8" >Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainCard;