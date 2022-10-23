import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function localizeNumber(number)
{
  return Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function Icon(props) {
  const {imageStyle, imageUri} = props;

  return (
    <TouchableOpacity>
      <Image style={imageStyle} source={imageUri}/>
    </TouchableOpacity>
  );
}

function Likes(props) {
  const {post} = props;
  return (
    <Text style={{color: "white", fontWeight: "bold"}}>
      좋아요 {localizeNumber(post.likes)}개
    </Text>
  )
}

function Caption(props) {
  const {post} = props;
  const name = `${post.user.name.first}${post.user.name.last}`;

  return (
    <View style={{ marginTop: 3 }}>
      {
        typeof(post.caption) !== "string" || post.caption.length === 0
        ? 
        null 
        : 
        <Text style={{color: "white"}}>
          <Text style={{fontWeight: "bold"}}>{name}</Text>
          <Text>  </Text>
          <Text>
            {
              post.caption.length > 75 
              ?
              post.caption.slice(0, 75) + "..."
              :
              post.caption
            }
            {
              post.caption.length > 75 
              ?
              <Text style={{color: "grey", fontSize: 12}}>  더보기</Text>
              :
              null
            }
          </Text>
        </Text>
      }
    </View>
  )
}


function CommentsSection(props) {
  const {post} = props;

  return (
    <View style={{marginTop: 5}}>
      {
        post.comments.length === 0
        ?
        null 
        :
        <Text style={{color: "grey", fontSize: 13, }}>
          댓글 {localizeNumber(post.comments.length)}개 {
            post.comments.length > 1 
            ?
            `모두 `
            : 
            ``
          }보기
        </Text>
      }
    </View>
  );
}

function Comments (props) {
  const {post} = props;
  return (
    <>
      {post.comments.slice(0, 2).map((comment, index) => (
        <View key={index} style={{marginTop: 3}}>
          <Text style={{color: "white"}}>
            <Text style={{fontWeight: "bold"}}>{comment.user}</Text>
            <Text>  {
              comment.comment.length > 60 
              ?
              comment.comment.slice(0, 60) + "..."
              :
              comment.comment
              }</Text>
          </Text>
        </View>
      ))}
    </>
  )
}

export default function Footer(props) {
  const {post} = props;

  return (
    <View>
      <View style={styles.iconContainer}>
        <View style={styles.iconLeftContainer}>
          <Icon imageStyle={styles.icon} imageUri={require("../../assets/instagram/heart-white.png")} />
          <Icon imageStyle={styles.icon} imageUri={require("../../assets/instagram/comment-white.png")} />
          <Icon imageStyle={styles.icon} imageUri={require("../../assets/instagram/dm-white.png")} />
        </View>
        <View style={styles.iconRightContainer}>
          <Icon imageStyle={styles.icon} imageUri={require("../../assets/instagram/bookmark-empty-white.png")} />
        </View>
      </View>

      <View style={styles.caption}>
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentsSection post={post}/>
        <Comments post={post}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    marginLeft: -8,
    marginRight: -5,
    marginBottom: 5,
  },
  iconLeftContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-around",
  },
  iconRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    width: 25,
    height: 25,
  },

})