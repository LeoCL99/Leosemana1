import GrupoProdHome from "../components/GrupoProdHome";
import Carrousel from "../components/Carrousel";
import Footer from "../components/footer";
export default function HomeView() {
    return (
        <div>
            <Carrousel/>
            <GrupoProdHome />
            <Footer/>
        </div>
    );
}