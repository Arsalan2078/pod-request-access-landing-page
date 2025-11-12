import css from "./App.module.css";

export default function App() {
  return (
    <main className={css.app} data-text-preset="2">
      <h1 data-text-preset="1">Publish your podcasts everywhere.</h1>

      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>

      <button data-text-preset="3">Request access</button>
    </main>
  );
}
