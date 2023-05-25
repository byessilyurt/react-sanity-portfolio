export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: "/cv.pdf",
    },
  };
}

export default function CVPage() {
  return <></>;
}
