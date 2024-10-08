import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command("new <note>", "Create a new note", yargs => {
    return yargs.positional("note", {
        type: 'string',
        description: "The content of the note",
    })
  }, (argv) => {
    console.log(argv.note)
  })
  .option("tags", {
    alias: "t",
    type: "string",
    description: "Tags to add to the note"
  })
  .demandCommand(1)
  .parse()