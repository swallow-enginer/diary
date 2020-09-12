import React, { useState } from "react";
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';

const index = () => {
  const router = useRouter();

  const onLogin = () => {
    router.push("/api/login/login");
  }

  return (
    <>
      <Button
        variant="contained" color="primary"
        onClick={onLogin}
      >ログイン</Button>
    </>
  );
};

export default index;