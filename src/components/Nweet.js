import { dbService } from "fbase";
import React, { useState } from "react";

const Nweet = ({ nweet, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweet.text);

  const onDelecteClick = async () => {
    const ok = window.confirm("해당 게시물을 삭제 하시겠습니까?");
    if (ok) {
      await dbService.doc(`nweets/${nweet.id}`).delete();
    }
  };

  const toggleEditing = () => setEditing(!editing);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweet.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type={"text"}
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value={"Update Nweet"} />
          </form>
          <button onClick={toggleEditing}>취소</button>
        </>
      ) : (
        <>
          <h4>{nweet.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDelecteClick}>삭제</button>
              <button onClick={toggleEditing}>수정</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
