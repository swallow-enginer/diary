import Select from '@material-ui/core/Select';
import MenuItem  from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    category: {
        minWidth: '150px'
    },
    root: {
        verticalAlign: "baseline"
    }
  });

export default function CategorySelect(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState(10);

    const ADD_CATEGORY = -1;

    // const category_list = props.category-list;

    const openDialog = () => {
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    const changeCategory = (event) => {
        const val = event.target.value;
        if (val === ADD_CATEGORY) {
            openDialog();
        } else {
            setCategory(event.target.value);
        }
    };
    const getCategoryList = () => {
        var category_item_list = [];

        for (var i in category_list) {
            category_item_list.push(
                <MenuItem 
                    value={category_list[i].value}
                >
                    {data[i].text}
                </MenuItem>);
        }
        //カテゴリー追加
        category_item_list.push(
            <MenuItem 
                value={ADD_CATEGORY}>
                <Avatar>
                    <AddIcon />
                </Avatar>
                追加
            </MenuItem>
        );
    }
    

    return (
        <>
        <FormControl 
            className={classes.category}
            classes={{root:classes.root}}
        >
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
        カテゴリー
        </InputLabel>
        <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={changeCategory}
            autoWidth
        >
            <MenuItem value={10}>メモああああ</MenuItem>
            <MenuItem value={20}>仕事</MenuItem>
            <MenuItem value={-1}><Avatar><AddIcon /></Avatar>追加</MenuItem>
        </Select>
        </FormControl>
        <Dialog open={open} onClose={closeDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">カテゴリー追加</DialogTitle>
            <DialogContent>
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="add-category"
                    label="カテゴリー"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog} color="primary">
                    キャンセル
                </Button>
                <Button onClick={closeDialog} color="primary">
                    登録
                </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}