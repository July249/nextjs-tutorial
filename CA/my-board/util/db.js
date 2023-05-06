// MongoDB 연결
// 필요할 때만 서버에 연결을 요청하기 위해 외부 util로 분리
// 하단의 구조는 Next.js 공식 문서에서 가져온 코드입니다.
import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
