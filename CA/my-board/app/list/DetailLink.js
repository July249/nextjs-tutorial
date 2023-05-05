'use client';

import { useRouter } from 'next/navigation';

export default function DetailLink() {
  const router = useRouter();
  return (
    <button type='button' onClick={() => {}}>
      버튼
    </button>
  );
}

// Note: useRouter 기능
/**
 * router.push('/') : 해당 url로 이동
 * router.back() : 이전 페이지로 이동
 * router.reload() : 현재 페이지 새로고침 (브라우저 전체)
 * router.refresh() : 변동이 있는 부분만 새로고침
 * router.replace('/') : 해당 url로 이동, 뒤로가기 불가능
 * router.prefetch('/') : 해당 url로 이동, 미리 로딩 => Link 태그만 만나도 바로 연결됨 왜냐하면 Link의 prefetch 속성의 기본 값이 true이기 때문임
 * router.push('/detail/[id]', `/detail/${item._id}`) : 해당 url로 이동, 동적 라우팅
 * router.push({ pathname: '/detail/[id]', query: { id: item._id } }) : 해당 url로 이동, 동적 라우팅
 */
