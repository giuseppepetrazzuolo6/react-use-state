export default function LanguageCard({ language }) {
    if (!language) return 'Clicca sul linguaggio che vuoi leggere'

    return (
        <div className="border border-1 border-dark rounded-3 p-3 my-4">
            <h5>{language.title}</h5>
            <p>{language.description}</p>
        </div>
    );
}