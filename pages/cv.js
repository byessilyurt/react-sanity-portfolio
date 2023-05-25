export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: "/files/cv.pdf",
    },
  };
}

export default function CVPage() {
  return <></>;
}
