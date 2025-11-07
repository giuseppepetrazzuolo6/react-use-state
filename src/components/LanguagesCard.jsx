export default function LanguageCard({ language }) {
    if (!language) return <p>Clicca sul linguaggio che vuoi leggere</p>

    return (
        <div className="border border-1 border-dark rounded-3 p-3 my-4">
            <h5>{language.title}</h5>
            <p>{language.description}</p>
        </div>
    );
}