import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)&&(<div className={classes.commentsInnerContainer} disabled={!user?.result}>
          <Typography gutterBottom variant="h6">Applicants</Typography>
         { comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>)}
   {(user?.result?.googleId != post?.creator && user?.result?._id != post?.creator)&&(     <div style={{ width: '70%' }}>
          <Typography gutterBottom variant="h6">Give your Email-id:</Typography>
          <TextField fullWidth rows={1} variant="outlined" label="Email-id" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length}  color="primary" variant="contained" onClick={handleComment}>
            Apply
          </Button>
        </div>)}
      </div>
    </div>
  );
};

export default CommentSection;
