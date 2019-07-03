import * as moment from 'moment';



export class SampleDateReplacer {

    public static replacer = (key, value) => {
        if (value != null && (key === 'sampledOn' || key === 'createdAt'))
            return moment(value).format("YYYY-MM-DDTHH:mm:ssZZ");

        return value;

    }

}
