import LanguagesButton from "./LanguagesButton";
import LanguageCard from "./LanguagesCard";

export default function Main({ languages, selectedLang, setSelectedLang }) {

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card rounded-0 w-100">
                <div className="card-header bg-light">
                    <h1 className="py-2">Learn Web development</h1>
                </div>
                <div className="card-body p-5">
                    <LanguagesButton
                        languages={languages}
                        selectedLang={selectedLang}
                        setSelectedLang={setSelectedLang}
                    />
                    <LanguageCard language={selectedLang} />
                </div>
            </div>
        </div>
    )
}