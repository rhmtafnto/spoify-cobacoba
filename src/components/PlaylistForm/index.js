const PlaylistForm = (props) => {
  const { handlePlaylistChange, handlePlaylistSubmit, playlist, isSelectedEmpty } = props;
  return (
    <section className="playlist-form">
        <form id="form" className="form" onSubmit={handlePlaylistSubmit}>
        <h2 className="heading">📝 Create Custom Playlist 📝</h2>
        <ul>
          <li>
            <label htmlFor="title" className="form__label">
              Playlist Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              required
              minLength="10"
              placeholder="Add a title"
              className="form__input"
              onChange={handlePlaylistChange}
              value={playlist.title}
            />
          </li>
          <li>
            <label htmlFor="description" className="form__label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Add an optional description"
              className="form__textarea"
              onChange={handlePlaylistChange}
              value={playlist.description}
            ></textarea>
          </li>
        </ul>
        <button type="submit" className="btn btn--save" disabled={isSelectedEmpty}>
          Create Playlist
        </button>
      </form>
    </section>
  );
};

export default PlaylistForm;
