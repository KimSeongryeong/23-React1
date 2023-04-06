import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
  };

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                src="https://i.namu.wiki/i/fhpoI9UeGzYSlO0RC4olFnKWrmFDMVumnMc-wJVlVM8ejDmbfr9xw4Rq_wwVjpklNiLduMYtK8zrU0hPOi-bdNuyXxTVo_SIeX6XF-F7kPeEafkDJlFfCqyviEL-Uc63AI_Ak6SgENTBE2uJP8AFbg.webp"
                alt="프로필 이미지"
                style={styles.image}
                />
                </div>
                <div style = {styles.contentContainer}>
                    <span style={styles.nameText}>{props.name}</span>
                    <span style={styles.commentText}>{props.comment}</span>
            <h1>[04월06일]내가 만든 첫 컴포넌트.</h1>
        </div>
        </div>
    );
}

export default Comment;

