export default function LanguagesButton({ languages, selectedLang, setSelectedLang }) {
    return (
        <div className="mb-4">
            {languages.map((lang) => (
                <button
                    key={lang.id}
                    className={`btn m-1 ${selectedLang && selectedLang.id === lang.id ? "btn-warning" : "btn-primary"}`}
                    onClick={() => setSelectedLang(lang)}
                >
                    {lang.title}
                </button>
            ))}
        </div>
    );
}
