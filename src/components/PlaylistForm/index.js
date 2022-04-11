const PlaylistForm = (props) => {
  const { handlePlaylistChange, handlePlaylistSubmit, playlist } = props;
  return (
    <section className="playlist-form">
      <form id="form" className="form" onSubmit={handlePlaylistSubmit}>
        <h2 className="heading">Create Playlist</h2>
        <ul>
          <li>
            <label htmlFor="title" className="form__label">
              Title
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
        <button type="submit" className="btn btn--save">
          Create playlist
        </button>
      </form>
    </section>
  );
};

export default PlaylistForm;