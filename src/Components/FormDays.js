import { useForm } from "react-hook-form"
import { Form, Label, Button , Col, Row} from "reactstrap"
import "../Styles/FormSpecificDayStyle.css"

const FormDays = ({FormDaysData}) => {
    const { register, handleSubmit, formState: { errors } } = useForm(({
        defaultValues: {
            location: "Buenos Aires",
            days: "5"
        }
    }))

    const onSubmitHandler = (data) => {
        console.log(data);
        console.log(data.location);
        console.log(data.days);
        FormDaysData(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <Row>
                <Col sm="5">
                    <Label className="mr-sm-2">Location </Label>
                    <input class="form-control" type="text" {...register("location", {
                        required: {
                            value: true,
                            message: "Location is required"
                        }
                    })} />
                    {
                        errors.location && <span>{errors.location.message}</span>
                    }
                </Col>
                <Col sm="4">
                    <Label className="mr-sm-2">Futures Days </Label>
                    <input class="form-control" type="number" min="0" max="13" {...register("days", { required: true })} />
                    {errors.days && <span className="text-danger">Days is required</span>}
                </Col>
                <Col sm="3">
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default FormDays