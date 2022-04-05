import { makeStyles } from "@mui/styles";
// import ButtonAppBar from "./AppBar";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "1fr",
    gridTemplateAreas: "'left right'",
  },
});

export function Layout({ children }) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {/* <div style={{ gridArea: 'appbar'}}>
        <ButtonAppBar />
      </div> */}

      {children}
    </div>
  );
}
