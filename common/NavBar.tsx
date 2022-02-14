import { ReactNode, FunctionComponent } from 'react'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

const NavBar: FunctionComponent = () => {
    const router = useRouter();
    const { pathname } = router; 

    return (
        <nav>
            <img src="/vercel.svg" />
            <div>
                <Link href="/">
                    <a className={pathname === "/" ? "active" : ""}>HOME</a>
                </Link>
                <Link href="/notice">
                    <a className={pathname === "/notice" ? "active" : ""}>회사소식공유</a>
                </Link>
                <Link href="/idea">
                    <a className={pathname === "/idea" ? "active" : ""}>아이디어 공유</a>
                </Link>
                <Link href="/news">
                    <a className={pathname === "/news" ? "active" : ""}>뉴스레터</a>
                </Link>
                <Link href="/club">
                    <a className={pathname === "/club" ? "active" : ""}>동아리 소식통</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 50px;
                }
            `}</style>
        </nav>
    )
}

export default NavBar;